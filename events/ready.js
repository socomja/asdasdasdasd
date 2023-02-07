module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);
  const sleep = (ms) => {return new Promise(resolve=>{setTimeout(resolve,ms)})}
  client.on('ready', async() => {
      while(1) {
        client.user.setActivity("제작자:자서#8302")
        await sleep(4000)
        client.user.setActivity("디코섭:EHbhnz5B4P")
        await sleep(4000)
        client.user.setActivity("%도움말")
        await sleep(4000)
        client.user.setActivity("문의는 봇에게 디엠 해주세용~")
        await sleep(4000)
        client.user.setActivity("[AD]뮤직봇도 많이 이용해주세요~")
        await sleep(4000)
      } 
    })
};
