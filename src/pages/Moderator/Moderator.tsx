import { useEffect, useState } from "react";
import server from '../../main'


function Moderator () {

    const [token, setToken] = useState<string | null>(null);
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    useEffect(() => {
        const token = localStorage.getItem('smsToken');
        if (token) {
            setToken(token);
        }
    }, [])

    function submitFormElements() {
        fetch(`${server}/moderator/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: username, password: password })
        }).then(response => response.json())
            .then(data => {
                if (data.token === undefined) {
                    alert('Invalid username or password');
                }
                console.log(data);
                setToken(data.token);
                localStorage.setItem('smsToken', data.token);
            })
    }

    return (
        <div className="w-full flex flex-col p-16 h-full bg-white">
            {!token && 
                <div className="flex-1 gap-2 flex flex-col justify-center place-items-center">
                    <img src="https://severance.wiki/_media/lumon-logo.webp?cache=" className="w-1/2"></img>
                    <text className="text-black font-bold text-4xl">Log In</text>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} className=" bg-white border border-gray-400 p-1 rounded-sm text-black placeholder:text-black" placeholder="username"></input>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className=" bg-white border border-gray-400 p-1 rounded-sm text-black placeholder:text-black" placeholder="password"></input>
                    <button onClick={submitFormElements}>Submit</button>
                </div>
            }
        </div>
    )
}

export default Moderator