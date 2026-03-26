import React from "react";

export const Child = React.memo(({ onPress }) => {
  console.log("Child Rendered");

  return (
    <TouchableOpacity onPress={onPress}>
      <Text>Click Me</Text>
    </TouchableOpacity>
  );
});