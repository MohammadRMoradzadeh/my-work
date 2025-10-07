import { iconMap } from "./iconMap";

export const getIcon = ({
  name = null,
  size = null,
  color = null,
  variant = null,
  weight = null,
  className = null,
} = {}) => {
  if (!name) return null;
  const IconComponent = iconMap?.[name];
  if (!IconComponent) return <span>*^*</span>;
  return (
    <IconComponent
      {...(size ? { size } : {})}
      {...(color ? { color } : {})}
      {...(variant ? { variant } : {})}
      {...(weight ? { weight } : {})}
      {...(className ? { className } : {})}
    />
  );
};
