interface RespuestaTopHeadLines {
  data: Datum[];
  task: string;
}

interface Datum {
  id: string;
  name: string;
  logo: string;
  description: string;
  contact: string;
  phone: string;
  mobile: string;
  email: string;
  keywords: string[];
  site: string;
}
