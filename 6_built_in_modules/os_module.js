    const os = require('os')

    // info about current user
    console.log(os.userInfo());

    // method returns the uptime of the system
    console.log(`The System Uptime is ${os.uptime()}`);

    const currentOS = {
        name: os.type(),
        release: os.release(),
        totalMem: os.totalmem(),
        freeMem: os.freemem()
    }
    console.log(currentOS)