import { ChangeEvent, useState } from "react";
import { Button } from "../button";
import { InputText } from "../inputText";
import { AiOutlineCheck } from "react-icons/ai";
import { PiCopySimple } from "react-icons/pi";
import { useGenerateURL } from "@/utils/api-service/transform-url";
import { url } from "@/utils/api-service/api-config";

export const Banner = () => {
  const { mutate, isSuccess, data } = useGenerateURL();
  const [isCopy, setIsCopy] = useState<boolean>(false);
  const [form, setForm] = useState<string>("");
  const copyText = async (text: string) => {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  };

  const handleCopyButton = () => {
    copyText(`${url}url/${data?.shortUrl}`).then(() => {
      setIsCopy(true);
      setTimeout(() => {
        setIsCopy(false);
      }, 1000);
    });
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setForm(value);
  };

  const handleSubmit = () => {
    mutate(form);
    setForm("");
  };
  return (
    <div className="min-h-[50vh] flex flex-col gap-10 items-center justify-center">
      <div className="w-full text-center">
        <h1>Simplify, Share, Amplify Links!</h1>
        <p>
          Transform long URLs effortlessly. Embrace brevity for streamlined
          sharing experiences.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-5 w-4/6">
        <div className="w-full flex gap-4">
          <InputText
            name="form"
            value={form}
            onchange={handleChangeInput}
            placeholder={"http://example.com/lorem-ipsum"}
          />
          <Button type="success" onclick={handleSubmit}>
            Generate
          </Button>
        </div>
        <div className="w-full flex gap-4 items-stretch">
          <div className="flex items-center">To</div>
          <div className="bg-secondary pl-5 flex w-full justify-between items-center rounded-lg">
            <p>{url}url/{data?.shortUrl}</p>
            <Button disabled={isCopy} onclick={handleCopyButton}>
              {!isCopy ? <PiCopySimple /> : <AiOutlineCheck />}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
