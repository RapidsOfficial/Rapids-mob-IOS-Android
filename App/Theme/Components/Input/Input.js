import React from 'react';
import { PropTypes } from 'prop-types';

import { TextField } from 'react-native-material-textfield';
import Style from './InputStyle';

export const Input = (props) => {
  const { 
    inputRef,
    value,
    title,
    secureTextEntry,
    clearTextOnFocus,
    defaultValue,
    keyboardType,
    autoCapitalize,
    autoCorrect,
    enablesReturnKeyAutomatically,
    onFocus,
    onChangeText,
    onSubmitEditing,
    returnKeyType,
    label,
    multiline,
    blurOnSubmit,
    characterRestriction,
    maxLength,
    renderRightAccessory,
    error,
    disabled,
    labelTextStyle,
    inlineImageLeft,
    baseColor,
    tintColor
  } = props;

  return (
    <TextField 
      ref={inputRef}
      value={value}
      title={title}
      secureTextEntry={secureTextEntry}
      clearTextOnFocus={clearTextOnFocus}
      defaultValue={defaultValue}
      keyboardType={keyboardType}
      autoCapitalize={autoCapitalize}
      autoCorrect={autoCorrect}
      enablesReturnKeyAutomatically={enablesReturnKeyAutomatically}
      onFocus={onFocus}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
      returnKeyType={returnKeyType}
      label={label}
      multiline={multiline}
      blurOnSubmit={blurOnSubmit}
      characterRestriction={characterRestriction}
      maxLength={maxLength}
      renderRightAccessory={renderRightAccessory}
      error={error}
      disabled={disabled}
      inputContainerStyle={error ? Style.inputContainerErrorStyle : Style.inputContainerStyle}
      containerStyle={Style.containerStyle}
      labelTextStyle={labelTextStyle || Style.labelTextStyle}
      titleTextStyle={Style.titleTextStyle}
      affixTextStyle={Style.affixTextStyle} 
      lineWidth={0}    
      activeLineWidth={0}
      baseColor={baseColor}
      tintColor={tintColor}
      inlineImageLeft={inlineImageLeft}
      textColor={props.textColor || "white"} 
    />
  );
};

Input.propTypes = {
  ref: PropTypes.func,
  value: PropTypes.string,
  title: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  clearTextOnFocus: PropTypes.bool,
  defaultValue: PropTypes.string,
  keyboardType: PropTypes.string,
  autoCapitalize: PropTypes.bool,
  autoCorrect: PropTypes.bool,
  enablesReturnKeyAutomatically: PropTypes.bool,
  onFocus: PropTypes.func,
  onChangeText: PropTypes.func,
  onSubmitEditing: PropTypes.func,
  returnKeyType: PropTypes.string,
  label: PropTypes.string,
  multiline: PropTypes.bool,
  blurOnSubmit: PropTypes.bool,
  characterRestriction: PropTypes.number,
  maxLength: PropTypes.number,
  renderRightAccessory: PropTypes.func,
  error: PropTypes.string,
  disabled: PropTypes.bool
};