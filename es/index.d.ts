export declare type BlobToType = 'text' | 'arrayBuffer' | 'buffer' | 'binary' | 'binaryString' | 'dataURL' | 'base64';
export declare type BlobTo<T extends BlobToType> = T extends 'arrayBuffer' | 'buffer' ? ArrayBuffer : string;
export declare function convert<T extends BlobToType>(blob: Blob, type: T): Promise<BlobTo<T>>;
