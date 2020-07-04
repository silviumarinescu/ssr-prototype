<template>
  <div>
    <h1>Total count from front-end: {{totalClient}}</h1>
    <h1>Total count from back-end: {{totalServer}}</h1>
  </div>
</template>
<script>

export default {
  name: 'Test-Component',
  data: function () {
    return {
      totalClient: 'loading...',
      totalServer: 'loading...'
    }
  },
  mounted() {    
    const db = require("./client-database.js").default;
    const firebase = require('firebase/app');
    const increment = firebase.firestore.FieldValue.increment(1);
    db.doc(`analytics/pageViews`).set(
      {
        totalClient: increment,
      },
      { merge: true }
    );

    db.doc('analytics/pageViews').onSnapshot(doc => {
        if(doc.data().totalClient !== 1)
          this.totalClient = doc.data().totalClient || 0;
        this.totalServer = doc.data().totalServer || 0;
    });
  }
}
</script>
