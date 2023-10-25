import Image from "next/image";
import axios from "axios";
axios.defaults.withCredentials = true;
import { use, useEffect, useState } from "react";

import { disconnect } from "@wagmi/core";
import { ConnectButton, useConnectModal } from "@rainbow-me/rainbowkit";
import { useAccount, useSignMessage } from "wagmi";

import { useQueryClient } from "@tanstack/react-query";

async function handleCredentialResponse(response: any) {
  // console.log("Encoded JWT ID token: " + response.credential);
  let body = {
    token: response.credential,
  };
  body = {
    token: response.credential,
  };
  let res = await axios.post(`${process.env.P_API}/login/google`, body);
  if (res.status == 200) {
    let jwt = res.data.data.token;
    localStorage.setItem("token", `Bearer ${jwt}`);

    location.reload();
  } else {
    alert("SignUp failed Please try Again");
  }
}

function signUpGoogle() {
  let win = window as any;
  win.google.accounts.id.initialize({
    client_id: process.env.GOOGLE_CLIENT_ID,
    callback: handleCredentialResponse,
  });
  win.google.accounts.id.renderButton(
    document.getElementById("google-login"),
    { theme: "outline", size: "large" },
    // customization attributes
  );
  win.google.accounts.id.prompt(); // also display the One Tap dialog
}

export default function Home() {
  return <div></div>;
}
