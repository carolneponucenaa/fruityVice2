const apiKey = '39990416-2cc8ec2e94d954928f9ff6145'
const numberOfImages = 5
const themeEnt = document.getElementById('busca')
const container = document.getElementById('imagem-container')

themeEnt.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        const theme = themeEnt.value

        const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${theme}&per_page=${numberOfImages}`

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                container.innerHTML = ''

                const photos = data.hits

                photos.forEach(photo => {
                    const imgcontainer = document.createElement('div')
                    const imgElement = document.createElement('img')
                    imgcontainer.classList.add('imgContainer')
                    imgElement.src = photo.webformatURL
                    imgElement.alt = photo.user
                    imgcontainer.appendChild(imgElement)
                    container.appendChild(imgcontainer)
                })
            })
            .catch(error => {
                console.error('Ocorreu um erro:', error)
            })
    }
})