import { useContext, useState } from "react";
import { InputField } from "../components/InputField/InputField";
import { Section } from "../components/Section/Section";
import { UserContext } from "../context/userContext";
import { SectionTitle } from "../components/SectionTitle/SectionTitle";

export function LoginPage() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const [loginMessage, setLoginMessage] = useState();

  const { setUserData } = useContext(UserContext);

  function submitData() {
    //Sådan her opretter man en body med en key value pairs
    const body = new URLSearchParams();
    body.append(`username`, email);
    body.append("password", password);

    // Opret et options object med HTTP request metode "POST" og vores body
    const options = {
      method: "POST",
      body: body,
    };

    // Fetch (med options - POST til server)
    fetch("https://api.mediehuset.net/token", options)
      .then((res) => res.json())
      .then((data) => {
        if (data.access_token) {
          setUserData(data);
          setLoginMessage(`Du er nu logget ind.. Velkommen tilbage ${data.user.firstname}`)
        } else {
          setLoginMessage("Du har tastet forkert password eller email");
        }
      })
      .catch((err) => setError(err));
  }

  return (
    <Section width="50%">
      <SectionTitle title={"Login"} text={loginMessage}/>
        <form>
          <InputField
            type="email"
            placeholder="Indtast din email..."
            name="email"
            labelText="Email:"
            id="email"
            action={setEmail}
          />
          <InputField
            type="password"
            placeholder="Indtast din adgangskode..."
            name="password"
            labelText="Adgangskode:"
            id="password"
            action={setPassword}
          />
        </form>
      <button onClick={() => submitData()}>Send</button>
    </Section>
  );
}
