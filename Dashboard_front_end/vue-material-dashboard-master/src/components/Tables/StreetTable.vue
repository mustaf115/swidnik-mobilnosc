<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Ulica">{{ item.street }}</md-table-cell>
        <md-table-cell md-label="ilość pieszych">{{ item.people }}</md-table-cell>
        <md-table-cell md-label="ilość pojazdów">{{ item.cars }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "street-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      selected: [],
      users: [
        {
          id: 1,
          street: "Akacjowa",
          people: "420",
          cars: "162",
		},
		{
          id: 2,
          street: "Św. Brata Alberta",
          people: "670",
          cars: "324",
		},
		{
          id: 3,
          street: "Aleja Armii Krajowej",
          people: "241",
          cars: "212",
		},
		{
          id: 4,
          street: "Anyżowa",
          people: "591",
          cars: "289",
		},
		{
          id: 5,
          street: "Bankowa",
          people: "702",
          cars: "102",
		},
		{
          id: 6,
          street: "Bławatkowa",
          people: "926",
          cars: "72",
        },
      ]
    };
  }
};
</script>
