import React, { KeyboardEvent, useRef } from "react";
import { useMutation } from "react-query";

import { PostLinkRequestDTO } from "@/interfaces/dtos/postLink/postLink.request.dto";
import { PostLinkResponseDTO } from "@/interfaces/dtos/postLink/postLink.response.dto";

const Generate = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const mutation = useMutation(async (postLinkObject: PostLinkRequestDTO) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    const bodyEncoded = new URLSearchParams();
    bodyEncoded.append("link", postLinkObject.link);

    const request = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/generate`, {
      method: "POST",
      body: bodyEncoded,
      headers,
    });
    if (!request.ok) throw new Error(request.statusText);
    return request.json();
  });

  const buildURLFromRedirect = (
    mutationResponse: PostLinkResponseDTO
  ): string => {
    if (window === undefined) return "";
    return `${window.location.protocol}//${window.location.host}${mutationResponse.redirect}`;
  };

  const shortURL = async () => {
    if (inputRef.current === null) return;
    const data = await mutation.mutateAsync({
      link: "https://natek.cf",
    });

    inputRef.current.value = buildURLFromRedirect(data);
  };

  const keyPressed = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      shortURL();
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center  bg-green-600 text-white">
      <div className="w-9/12">
        <label htmlFor="price" className="block text-sm font-medium">
          Url Shortener
          <input
            ref={inputRef}
            type="text"
            name="price"
            id="price"
            className="text-gray-800 w-full block pl-8 pr-12 py-4 text-lg border-gray-300 rounded-md outline-none"
            placeholder="Paste long url and shorten it"
            onKeyPress={keyPressed}
          />
        </label>
      </div>
      <button type="submit" onClick={shortURL} className="button mt-12">
        Shorten
      </button>
    </div>
  );
};

export default Generate;
