const randomNumber = async () =>{
    return new Promise((resolve, reject) => {
        let number = () =>{
            return fetch ('https://www.random.org/integers/?num=1&min=0&max=10&col=1&base=10&format=plain&rnd=new')
            .then(num => num.text())
        }
        number().then(res =>{
            if(res >= 5){
                resolve(res)
            }else{
                reject('O número gerado é menor que 5')
            }
        })
    })
}

randomNumber().then(res =>{
    console.log('O número gerado foi:', res);
}).catch(err =>{
    console.log(err);
})