export class Message {
    constructor(
        public name: string,
        public avatar: string,
        public lastMessage: string,
        public dialog?: Array<any>,
        public status?: boolean,
    ) { }
}