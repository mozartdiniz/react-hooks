export const simplePropsIsBiggerThan20 = (prevProps, nextProps) =>
    prevProps.simpleProp === nextProps.simpleProp || nextProps.simpleProp > 20;

export const complexPropsIsDifferent = (prevProps, nextProps) =>
    JSON.stringify(prevProps.complexProp) === JSON.stringify(nextProps.complexProp);

/**
 * Tip 1: Until it render for the first time, the prevProps remains the default value.
 * Tip 2: The comparation aims to answer if they are similar, not different, so it is to
 * return when do not renders.
 */
export const shouldNotUpdate = (prevProps, nextProps) =>
    simplePropsIsBiggerThan20(prevProps, nextProps) && complexPropsIsDifferent(prevProps, nextProps);
