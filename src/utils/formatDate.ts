import { format } from 'date-fns';

const formatDate = (date: string): string => {
  const [newDate, _] = date.split('T');
  return format(new Date(newDate), 'dd/MM/yyyy');
};

export default formatDate;
