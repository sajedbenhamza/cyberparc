<template>
  <div  class="container">
    <h1 class="middle title">Admin Dashboard</h1>

    <h2 class="section-title">Internship Applications</h2>
    <div>
      <div class="button-container">
      <button @click="openInternshipForm()" class="btn-add">
        <img src="../assets/icons/plus.png" class="icon" alt="">
        Add Application
      </button>
      </div>
      <table style="border-collapse: collapse; width: 100%; border: 0;">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(application, index) in applications" :key="index" style="border: 0;">
            <td>{{ application._id }}</td>
            <td>{{ application.name }}</td>
            <td>{{ application.email }}</td>
            <td :class="getStatusClass(application.status)">{{ application.status }}</td>
            <td>
              <div class="button-container">

                <div v-if="role === 'admin'">
              <button v-if="application.status == 'Pending'" @click="handleApplication(application._id, 'Approved')" class="btn-approve">Approve</button>
              <button v-if="application.status == 'Pending'" @click="handleApplication(application._id, 'Rejected')" class="btn-reject">Reject</button>
             </div>
              <button class="trash-button" @click="deleteApplication(application._id)">
                <img src="../assets/icons/trash.png" class="icon" alt="">
              </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 class="section-title">Rental Applications</h2>
    <div>
      <div class="button-container">
      <button @click="openRentalForm()" class="btn-add">
        <img src="../assets/icons/plus.png" class="icon" alt="">
        Add Rental Request
      </button>
      </div>

      <table style="border-collapse: collapse; width: 100%; border: 0;">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(rental, index) in rentals" :key="index" style="border: 0;">
            <td>{{ rental._id }}</td>
            <td>{{ rental.name }}</td>
            <td>{{ rental.email }}</td>
            <td :class="getStatusClass(rental.status)">{{ rental.status }}</td>
            <td>
              <div class="button-container">
                <div v-if="role === 'admin'">
              <button v-if="rental.status == 'Pending'" @click="handleRentalRequest(rental._id, 'Approved')" class="btn-approve">Approve</button>
              <button v-if="rental.status == 'Pending'" @click="handleRentalRequest(rental._id, 'Rejected')" class="btn-reject">Reject</button>
                </div>
              <button class="trash-button" @click="deleteRental(rental._id)">
                <img src="../assets/icons/trash.png" class="icon" alt="">
              </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="modal-overlay" v-if="showInternshipForm" @click.self="closeInternshipForm">
    <div class="whitebg">
      <button class="close-button" @click="closeInternshipForm">X</button>
      <InternshipForm @application-added="updateApplications" />
    </div>
  </div>
  <div class="modal-overlay" v-if="showRentalFrom" @click.self="closeRentalsForm">
    <div class="whitebg">
      <button class="close-button" @click="closeRentalsForm">X</button>
      <RentalFrom @rental-added="updateRentals" />
    </div>
  </div>
</template>

<script lang="ts">
import InternshipForm from './InternshipForm.vue';
import RentalFrom from './RentalForm.vue';

interface Application {
  _id: string;
  name: string;
  email: string;
  status: string;
}

interface Rental {
  _id: string;
  name: string;
  email: string;
  status: string;
}

export default {
  components: {
    InternshipForm,
    RentalFrom
  },

  data() {
    return {
      role: localStorage.getItem("role"),
      showInternshipForm: false,
      showRentalFrom: false,
      applications: [] as Application[],
      rentals: [] as Rental[],
    };
  },
  mounted() {
    this.fetchApplications();
    this.fetchRentalRequest();
  },

  methods: {
    fetchApplications() {
      fetch("http://localhost:5000/api/applications", {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(data => {
          this.applications = data;
          if(this.role !== "admin"){
            this.applications = this.applications.filter(application => application.email === localStorage.getItem("email"));
          }
        });
    },
    handleApplication(_id: string, status: string) {
      fetch(`http://localhost:5000/api/applications/${_id}`, {
        method: 'PATCH',
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          status: status
        })
      }).then(response => response.json())
        .then(() =>{
            this.applications = this.applications.map(application =>
              application._id === _id ? { ...application, status } : application
            );
        });

    },

    fetchRentalRequest() {
      fetch("http://localhost:5000/api/rentals", {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(data => {
          this.rentals = data;
          if(this.role !== "admin"){
            this.rentals = this.rentals.filter(rental => rental.email === localStorage.getItem("email"));
          }
        });
    },
    handleRentalRequest(_id: string, status: string) {
      fetch(`http://localhost:5000/api/rentals/${_id}`, {
        method: 'PATCH',
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          status: status
        })
      }).then(response => response.json())
              .then(() =>{
            this.rentals = this.rentals.map(rental =>
              rental._id === _id ? { ...rental, status } : rental
            );
        });
    },

    openInternshipForm() {
      this.showInternshipForm = true;
    },
    closeInternshipForm() {
      this.showInternshipForm = false;
    },
    updateApplications(newApplication: Application) {
      this.applications.push(newApplication);
      this.closeInternshipForm();
    },
    openRentalForm() {
      this.showRentalFrom = true;
    },
    closeRentalsForm() {
      this.showRentalFrom = false;
    },
    updateRentals(newRental: Rental) {
      this.rentals.push(newRental);
      this.closeRentalsForm();
    },
    deleteApplication(_id: string) {
      fetch(`http://localhost:5000/api/applications/${_id}`, {
        method: 'DELETE',
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json"
        }
      }).then(() => {
        this.applications = this.applications.filter(application => application._id !== _id);
      });
    },
    deleteRental(_id: string) {
      fetch(`http://localhost:5000/api/rentals/${_id}`, {
        method: 'DELETE',
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json"
        }
      }).then(() => {
        this.rentals = this.rentals.filter(rental => rental._id !== _id);
      });
    },
    getStatusClass(status: string) {
      if (status === 'Approved') return 'status-approved';
      if (status === 'Rejected') return 'status-rejected';
      if (status === 'Pending') return 'status-pending';
      return '';
    }
  }
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* semi-transparent background */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000; /* ensure it's on top */
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 1.2em;
  cursor: pointer;
}

.whitebg {
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  position: relative;
  min-width: 300px;
  max-width: 600px;
}

table,
th,
td {
  border: 0; /* Removes borders */
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

.btn-add {
  background-color: #4CAF50;
  border-radius: 10px;
  padding: 5px;
  border: none;
  text-align: center;
  color: #f2f2f2;
  position: relative;
  margin-left: auto;
}
.button-container {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
}

.icon {
  width: 20px;
  height: 20px;
  color: white;
}

.btn-approve {
  margin-right:5px;
  background-color: #4CAF50; /* Green */
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.btn-reject {
  background-color: #ff0000; /* Orange */
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.title {
  font-family: 'Arial', sans-serif;
  font-size: 2.5em;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-bottom: 2px solid #17A9FD;
  padding-bottom: 10px;
}

.section-title {
  font-family: 'Arial', sans-serif;
  font-size: 1.8em;
  font-weight: bold;
  color: #555;
  text-align: left;
  margin-top: 20px;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-left: 5px solid #17A9FD;
  padding-left: 10px;
}

.status-approved {
  color: #4CAF50; /* Green */
  font-weight: bold;
}

.status-rejected {
  color: #ff0000; /* Red */
  font-weight: bold;
}

.status-pending {
  color: #FF9800; /* Orange */
  font-weight: bold;
}
.container{
  padding-bottom: 140px;
}
.trash-button {
  background-color: white; /* Red */
  border: none;
  cursor: pointer;
  margin-left: auto;
}
</style>

