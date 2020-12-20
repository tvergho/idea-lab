import defaultResolve, { DeleteAction } from 'part:@sanity/base/document-actions';

const NullAction = (props) => {
  return null;
};

const resolveDocumentActions = (props) => {
  if (props.type !== 'siteSettings') {
    return defaultResolve(props);
  }
  return defaultResolve(props)
    .map((Action) => (Action === DeleteAction ? NullAction : Action));
};

export default resolveDocumentActions;
