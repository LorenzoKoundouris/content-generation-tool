function removeWhiteSpace(description: string) {
  description = description
    .replace(/\n/g, "")
    .replace(/[\t ]+\</g, "<")
    .replace(/\>[\t ]+\</g, "><")
    .replace(/\>[\t ]+$/g, ">");

  return description;
}

export default removeWhiteSpace;
