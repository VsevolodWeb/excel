console.log('module 3')

async function start() {
	await Promise.resolve()
}

start().then(r => console.log('response', r))