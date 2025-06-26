import Input from "../common/form/Input/Input";

export const getInputByHeader = (headerValue: string) => {
  if (["id", "department", "name", "email"].includes(headerValue)) {
    return <Input type="text" />;
  }
  if (["password", "passwordCheck"].includes(headerValue)) {
    return <Input type="password" />;
  }
  if (["contact"].includes(headerValue)) {
    return <Input type="tel" />;
  }
  if (headerValue === "checkbox") {
    return <Input type="checkbox" />;
  }
  return null;
};
