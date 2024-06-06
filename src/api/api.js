import { URL } from "../const";

export const sendConfirmEmail = async (email) => {
    const jwtToken = localStorage.getItem("jwtToken");
    console.log(jwtToken);
    console.log(JSON.stringify({email :email}))
    alert(email);
    const res = await fetch(`http://52.79.126.94:8082/api/members/request/accept`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${jwtToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email : email })
      });
    if (res.ok) {
        return true;
    } else {
        return false;
    }
}

export const getRequestAccounts = async () => {
    try {
        const [account] = await window.ethereum.request({
            method: 'eth_requestAccounts',
        })
        return account;
    } catch (error) {
        return;
    }
}

export const getRequestListAPI = async () => {
    const account = await getRequestAccounts();
    console.log(account);
    const res = await fetch(`${URL}/requestList`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            account: account
        })
    })
    if (res.ok) {
        const data = await res.json();
        if (data.msg) {
            alert(data.msg);
            return [];
        }
        console.log(res);
        //setResponse(data);
        return data;
    } else {
        console.log("rejected");
    }
}

export async function confirmDID(account) {
    const res = await fetch(`${URL}/approveRequest`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            account: account,
        })
    })
    if (res.ok) {
        //console.log(res);
        return true;
    } else {
        //console.log("rejected")
        return false;
    }
}
