import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 1,
  duration: '5s',
}

export default function () {
  http.get('http://127.0.0.1:3000');
  sleep(1);
}