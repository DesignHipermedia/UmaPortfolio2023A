new Vue({
  el: '#app',
  data: {
    isDarkMode: false,
  },
  methods: {
    toggleMode() {
      this.isDarkMode = !this.isDarkMode;
      document.body.classList.toggle('dark-mode', this.isDarkMode);
    },
  },
});


new Vue({
  el: '#app2',
  data: {
    items: [
      {
        title: 'UIDeli.com',
        subtitle: 'Design + Development 2023',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
        image: 'https://cdn.britannica.com/84/203584-050-57D326E5/speed-internet-technology-background.jpg',
        link: 'https://your-link1.com'
      },
      // Adicione mais itens conforme necessário
    ]
  },
  methods: {
    animateImage(index, animation) {
      const imgElement = document.querySelectorAll('.fotos img')[index];
      imgElement.classList.remove('animate__animated', 'animate__bounceIn', 'animate__bounceOut');
      imgElement.classList.add('animate__animated', `animate__${animation}`);
    }
  }
});
