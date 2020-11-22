<template>
  <div>
    <md-table v-model="stops" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
		   <md-table-cell md-label="ID">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Data zgłoszenia">{{ item.street }}</md-table-cell>
        <md-table-cell md-label="Treść">{{ item.arrival }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "questionaire-table",
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
          street: "20/10/2020",
          arrival: "Zepsuta lampa przy ulicy Akacjowej",
		},
		{
          id: 2,
          street: "06/11/2020",
          arrival: "Zniszczona ławka przed szkołą nr. 1(ul. Okulickiego 13)",
		},
		{
          id: 3,
          street: "22/11/2020",
          arrival: "Przewrócony śmietnik przed wejściem do szpitala(ul. B. Leśmiana 4/ al. Lotników Polskich 18, 22)",
		},
      ]
    };
  }
};
</script>
