export default class Database {
  private static _instance?: Database;
  private data: { [table: string]: any[] } = {};

  private constructor() {
    if (Database._instance) throw new Error("Use Database.instance instead of new.");
    Database._instance = this;
  }

  static get instance() {
    return Database._instance ?? (Database._instance = new Database());
  }

  async add(table: string, data: any) {
    if (!this.data[table]?.length) {
      this.data[table] = [data];
    } else {
      this.data[table].push(data);
    }
  }

  async get(table: string) {
    return this.data[table] || [];
  }
}
