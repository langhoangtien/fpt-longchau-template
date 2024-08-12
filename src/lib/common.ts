import { HOST_API } from "@/config-global";


export const encodeData = (data:any) => encodeURIComponent(JSON.stringify(data));
export const convertImagePathToUrl = (filePath:string, dimension:string | number) => {
  if (!filePath) return undefined;
  return `${HOST_API}/files${dimension ? `/${dimension}x${dimension}` : ''}/${filePath}`;
};

export const convertImageUrlToPath = (url = '') => (url ? url.split('/').pop() : undefined);


