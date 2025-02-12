function Button({ type, children }) {
  const style = {
    social: `cursor-pointer text-3xl `,
    action: `cursor-pointer rounded-2xl bg-[#00ACFF] px-4 py-2 text-xs text-white`,
    blogtags: `cursor-default rounded-2xl bg-[#00ACFF] px-2 py-1 text-md text-white`,
  };

  // header links
  if (type == "social") {
    return (
      <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#00ACFF] text-white opacity-300 transition-all duration-300 hover:bg-white hover:text-black">
        <button className={`${style["social"]}`}>{children}</button>
      </div>
    );
  }

  // view resume button
  if (type === "action") {
    return <button className={`${style["action"]}`}>{children}</button>;
  }

  if (type === "blogtags") {
    return <button className={`${style["blogtags"]}`}>{children}</button>;
  }
}

export default Button;
