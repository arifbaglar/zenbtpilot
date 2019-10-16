new Vue({
    el: '#app0',
    data () {
      return {
        info: null
      }
    },
    mounted () {
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(response => (this.info = response.data))
    }
  })

  new Vue({
    el: '#app1',
    data () {
      return {
        info: null
      }
    },
    
    mounted () {
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(response => (this.info = response.data))
    }
  })
  new Vue({
    el: '#app2',
    data () {
      return {
        info: null
      }
    },
    
    mounted () {
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(response => (this.info = response.data))
    }
  })
  new Vue({
    el: '#app3',
    data () {
      return {
        info: null
      }
    },
    
    mounted () {
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(response => (this.info = response.data))
    }
  })
  new Vue({
    el: '#app4',
    data () {
      return {
        info: null
      }
    },
    
    mounted () {
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(response => (this.info = response.data))
    }
  })
  new Vue({
    el: '#app5',
    data () {
      return {
        info: null
      }
    },
    
    mounted () {
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(response => (this.info = response.data))
    }
  })
  new Vue({
    el: '#app6',
    data () {
      return {
        info: null
      }
    },
    
    mounted () {
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(response => (this.info = response.data))
    }
  })
  new Vue({
    el: '#app7',
    data () {
      return {
        info: null
      }
    },
    
    mounted () {
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(response => (this.info = response.data))
    }
  })
  
/** search bar section**/
  $("#inpt_search").on("focus", function() {
	$(this)
		.parent("label")
		.addClass("active");
});

$("#inpt_search").on("blur", function() {
	if ($(this).val().length == 0)
		$(this)
			.parent("label")
			.removeClass("active");
});
/** search bar section**/