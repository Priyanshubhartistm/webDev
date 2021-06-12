async function abc(){
    await false.promises.writeFile("1.txt", "hello");
    let data = await false.promises.readFile("1.txt", "utf-8");
    console.log(data);
    return "how are you";

}

async function main(){
    let data = await abc();
    console.log(data);

}

main();