export function Section({children, width}) {
  const style = {
    width: width,
  };

  return <div style={style}>{children}</div>;
}
