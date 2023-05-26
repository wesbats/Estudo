const foto = () => {
    return fetch('https://picsum.photos/v2/list')
      .then(response => response.json())
      .then(data => {
        const url = data[0].download_url;
        return url;
      });
  };
  
  foto()
    .then(url => {
      document.getElementById('foto').src = url;
    })
    .catch(error => {
      console.log(error);
    });
  