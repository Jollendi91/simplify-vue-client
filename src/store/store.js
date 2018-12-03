import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      id: 1,
      setupStep: 1,
      monthlySalary: 3200,
      bills: [
        {
          id: 1,
          bill: "Rent",
          amount: "550.00"
        },
        {
          id: 2,
          bill: "Internet",
          amount: "50.00"
        }
      ],
      categories: [
        {
          id: 5,
          category: "Groceries",
          amount: "200.00",
          transactions: [
            {
              id: 46,
              transaction: "Aldi",
              date: "2018-11-18",
              amount: "50.00"
            }
          ]
        },
        {
          id: 5,
          category: "Gas",
          amount: "100.00",
          transactions: [
            {
              id: 45,
              transaction: "Philips",
              date: "2018-11-18",
              amount: "25.00"
            }
          ]
        }
      ]
    },
    loading: false,
    error: null
  },
  mutations: {

  },
  actions: {

  }
})
