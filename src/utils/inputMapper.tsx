import Input from "../common/form/Input/Input";

export const getInputByHeader = (
  headerValue: string,
  headerItems?: string[]
) => {
  if (["id", "department", "name", "email", "text"].includes(headerValue)) {
    return <Input type="text" />;
  }
  if (["password", "passwordCheck"].includes(headerValue)) {
    return <Input type="password" />;
  }
  if (["contact"].includes(headerValue)) {
    return <Input type="tel" />;
  }
  if (headerValue === "checkbox") {
    return <Input type="checkbox" items={headerItems} />;
  }
  if (headerValue === "date") {
    return <Input type="date" items={headerItems} />;
  }
  if (headerValue === "file") {
    return <Input type="file" items={headerItems} />;
  }
  return null;
};
