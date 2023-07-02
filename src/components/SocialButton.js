import { Slot } from "@radix-ui/react-slot";

export function SocialButton(props) {
  const Icon = props.icon;

  return (
    <>
      <Slot>
        <a href={props.link}>
          <Icon className="icon" />
        </a>
      </Slot>
    </>
  );
}
