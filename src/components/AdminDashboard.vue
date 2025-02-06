<template>
    <div>
      <h1>Admin Dashboard</h1>
      <section>
        <h2>Internship Applications</h2>
        <ul>
          <li v-for="(application, index) in applications" :key="index">
            {{ application.name }} - {{ application.email }}
            <button @click="approveApplication(index)">Approve</button>
            <button @click="rejectApplication(index)">Reject</button>
          </li>
        </ul>
      </section>

      <section>
        <h2>Office Rental Requests</h2>
        <ul>
          <li v-for="(rental, index) in rentals" :key="index">
            {{ rental.name }} - {{ rental.email }}
            <button @click="approveRental(index)">Approve</button>
            <button @click="rejectRental(index)">Reject</button>
          </li>
        </ul>
      </section>
    </div>
  </template>

  <script lang="ts">


interface Application {
  name: string;
  email: string;
}

  interface Rental {
    name: string;
    email: string;
  }

  export default {

    data() {
      return {
        applications: [] as Application[],
      rentals: [] as Rental[],
      };
    },
    methods: {
      approveApplication(index:number) {
        // Add approve logic
        console.log('Approved application', this.applications[index]);
      },
      rejectApplication(index:number) {
        // Add reject logic
        console.log('Rejected application', this.applications[index]);
      },
      approveRental(index:number) {
        // Add approve logic
        console.log('Approved rental', this.rentals[index]);
      },
      rejectRental(index:number) {
        // Add reject logic
        console.log('Rejected rental', this.rentals[index]);
      },
    },
  };
  </script>

  <style>

  </style>
