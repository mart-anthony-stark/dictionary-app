import { FC, ReactNode } from "react";

type Props = {
  data: any[];
  keyExtractor: (item: any) => string;
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
        <RenderItem key={keyExtractor(item)} {...item} />
      ))}
    </>
  );
};

export default FlatList;
