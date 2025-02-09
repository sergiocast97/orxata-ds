interface Button {
  url: string;
  text: string;
}

export default function Button({ url, text }: Button) {
  return (
    <a
      href={url}
      className="btn btn-filled btn-md btn-neutral"
    >
      {text}
    </a>
  );
}
