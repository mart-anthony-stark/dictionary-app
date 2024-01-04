import { FC, ReactNode } from "react";

type Props = {
  data: any[];
  keyExtractor: string;
  RenderItem: (item: any) => ReactNode;
};

const FlatList: FC<Props> = ({
  data,
  keyExtractor,
  RenderItem,
}): JSX.Element => {
  return (
    <>
      {data?.map((item: any) => (
        <RenderItem key={item[keyExtractor]} {...item} />
      ))}
    </>
  );
};

export default FlatList;
