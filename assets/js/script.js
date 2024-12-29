const apiRequest = async () => {
    let url = 'https://rickandmortyapi.com/api/character'

    const result = await fetch(url)
    const json = await result.json()

    choiceCharacter(json)
}

const choiceCharacter = (json) => {
    console.log(json.results[0].name)
}

apiRequest()