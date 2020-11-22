<template>
  <div>
    <md-table v-model="stops" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
		   <md-table-cell md-label="ID">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Ulica">{{ item.street }}</md-table-cell>
        <md-table-cell md-label="Przyjazd">{{ item.arrival }}</md-table-cell>
        <md-table-cell md-label="Odjazd">{{ item.departure }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "bus-schedule",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      selected: [],
      stops: [
		  {
          id: 1,
          street: "Akacjowa",
          arrival: "8:10",
          departure: "8:12",
		},
		{
          id: 2,
          street: "Św. Brata Alberta",
          arrival: "8:40",
          departure: "8:42",
		},
		{
          id: 3,
          street: "Aleja Armii Krajowej",
          arrival: "9:00",
          departure: "9:02",
		},
		{
          id: 4,
          street: "Anyżowa",
          arrival: "9:15",
          departure: "9:17",
		},
		{
          id: 5,
          street: "Bankowa",
          arrival: "9:50",
          departure: "9:52",
		},
		{
          id: 6,
          street: "Bławatkowa",
          arrival: "10:20",
          departure: "10:22",
        },
      ]
    };
  }
};
</script>
