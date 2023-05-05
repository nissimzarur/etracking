function useDateValidator(date: string) {
  if (!date) return true;

  const regex = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;

  return regex.test(date);
}

export default useDateValidator;
