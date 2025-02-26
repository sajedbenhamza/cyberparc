<template>
    <h2 class="middle"> Companies</h2>
    <div class="company-list-container">
      <CompanyCard v-for="company in companies" :key="company.id" :company="company" />
    </div>
  </template>

  <script lang="ts">
  import CompanyCard from './CompanyCard.vue';

  export default {
    components: {
      CompanyCard
    },
    data() {
      return {
        companies: [
          { id: 1, name: 'ALIMAYEE', description: 'Degital marketing', website: 'https://company1.com',logo:"src/assets/received_923132616679174.jpeg" },
          { id: 2, name: 'Think Marketing', description: 'Degital marketing', website: 'https://company2.com',logo:"src/assets/received_1333057634792940.jpeg" },
          { id: 3, name: 'OnlineLTD', description: 'Developpement web', website: 'https://company2.com',logo:"src/assets/received_652293633802286.jpeg                " },
          { id: 4, name: 'awel', description: 'Developpement', website: 'https://company2.com' ,logo:"src/assets/received_1263319548301171.jpeg"},
          { id: 5, name: 'SOFTSQUARE IT', description: 'Developpement web et mobile', website: 'https://softsquareit.com/' ,logo:"src/assets/received_957301503012171.jpeg"},
          { id: 6, name: 'Kellnex', description: 'Network ', website: 'https://company2.com' ,logo:"src/assets/received_1045877203972105.jpeg"},
          { id: 7, name: 'NGICOM', description: 'IT', website: 'https://company2.com' ,logo:"src/assets/received_1296264744965991.png"},
          { id: 8, name: 'OnlineLTD', description: 'Description of Company 3', website: 'https://company2.com' ,logo:"src/assets/received_652293633802286.jpeg"},
          { id: 9, name: 'BENYOUNES WEB', description: 'Developpement web et mobile', website: 'http://benyounesweb.com' ,logo:"src/assets/received_1269496637685779.jpeg"},
          { id: 10, name: 'ROAM MAZE', description: 'Designe', website: 'https://company2.com' ,logo:"src/assets/received_533927115634546.jpeg"},
          { id: 11, name: 'Glaa.Design', description: 'Designe', website: 'https://company2.com' ,logo:"src/assets/received_1316669799478089.png"},
          { id: 12, name: 'KerTechnologie', description: 'TechCompany', website: 'https://company2.com' ,logo:"src/assets/received_1168226861760989.png"},
          { id: 13, name: 'SOLDEV', description: 'Developpement Web', website: 'https://company2.com' ,logo:"src/assets/received_2093926204377189.jpeg"},
          { id: 14, name: 'PIONEER', description: 'Onlne Tech Services', website: 'https://company2.com' ,logo:"src/assets/received_618686897198298.png"},
          { id: 15, name: 'ABBK', description: 'Physicsworks', website: 'https://company2.com' ,logo:"src/assets/received_1136678634795339.png"},




        ]
      };
    }
  };
  </script>


<style scoped>
.middle {
   text-align: center;
  font-family: 'Arial', sans-serif;
  font-size: 2.5em; /* Increased font size */
  font-weight: bold;
  color: #333;
  margin-top: 20px;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1); /* Added text shadow for a fancier look */
}

.company-list-container {
  text-align: center;
  margin: 0 auto;
  padding: 20px;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Responsive grid */
  gap: 20px;
  justify-items: center;
  margin-top: 20px;
}

.company-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.company-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}

.company-card img {
  width: 100%;
  height: auto;
  border-bottom: 1px solid #eee;
}

.company-card-content {
  padding: 15px;
  text-align: left;
}

.company-card-title {
  font-size: 1.2em;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.company-card-description {
  font-size: 1em;
  color: #666;
  margin-bottom: 10px;
}

.company-card-website {
  font-size: 0.9em;
  color: #17A9FD;
  text-decoration: none;
  transition: color 0.3s ease;
}

.company-card-website:hover {
  color: #0056b3;
}
</style>

