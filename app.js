Vue.createApp({
  data() {
    return {
      perspectiveToggle: 0,
      rotateXAxis:0,
      rotateYAxis: 0,
      rotateZAxis: 0,
    }
  },
  methods: {
    reset() {
      this.perspectiveToggle = 0,
      this.rotateXAxis = 0,
      this.rotateYAxis = 0,
      this.rotateZAxis = 0
    },
    copy() {
      const el = document.createElement("textarea")

      el.setAttribute("readonly", "")
      el.style.position = "absolute"
      el.style.left = "-9999px"
      el.value = `transform: perspective: ${this.perspectiveStyle.perspective} ${this.style.transform};`

      document.body.appendChild(el);
      el.select()
      document.execCommand("copy")
      alert("Copied to clipboard!")
      document.body.removeChild(el)
    }
  },
  computed: {
    style() {
       return {
        transform: 'rotateX(' + this.rotateXAxis + 'deg) rotateY(' + this.rotateYAxis + 'deg) rotateZ(' + this.rotateZAxis + 'deg)',
       }
    },
    perspectiveStyle() {
      return {  perspective: this.perspectiveToggle + 'px' };
    }
  }
}).mount("#app")
