import {
  useId,
  useState,
  type ChangeEvent,
  type JSX,
  type ReactNode,
} from "react";
import TextAreaAutoSize, {
  type TextareaHeightChangeMeta,
} from "react-textarea-autosize";

import styles from "./TextArea.module.css";
import clsx from "clsx";

interface TextAreaProps {
  value: string;
  className?: string;
  placeholder?: string;
  leftButton?: JSX.Element;
  rightButton?: ReactNode;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextArea = ({
  className,
  value,
  placeholder,
  onChange,
  leftButton,
  rightButton,
}: TextAreaProps) => {
  const textAreaId = useId();

  const [isWrapped, setIsWrapped] = useState(false);

  const onHeightChange = (height: number, meta: TextareaHeightChangeMeta) => {
    const rowsCount = Math.round(height / meta.rowHeight);
    if (rowsCount > 1) {
      setIsWrapped(true);
    }
  };

  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e);
    if (!e.currentTarget.value.trim().length) {
      setIsWrapped(false);
    }
  };

  return (
    <div
      className={clsx(
        styles.textAreaWrapper,
        className,
        isWrapped && styles.wrap
      )}
    >
      {rightButton && (
        <p className={clsx(styles.btnIcon, styles.btnIconRight)}>
          {rightButton}
        </p>
      )}
      <TextAreaAutoSize
        maxRows={4}
        className={styles.textContainer}
        name={`chat-${textAreaId}`}
        id={textAreaId}
        placeholder={placeholder}
        value={value}
        onChange={onChangeHandler}
        onHeightChange={onHeightChange}
      />
      {leftButton && (
        <p className={clsx(styles.btnIcon, styles.btnIconLeft)}>{leftButton}</p>
      )}
    </div>
  );
};
