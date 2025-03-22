export interface CrudServiceEntityContract {
  id: string;
}

export interface CrudService<
  User extends CrudServiceEntityContract,
  CreationDto,
  UpdateDto,
> {
  /**
   * Returns entity with certain id if exists.
   */
  getById: (id: User['id']) => Partial<User> | null;

  /**
   * Returns all entities based on some query conditions.
   */
  getMany: () => Partial<User>[];

  /**
   * Creates entity from DTO.
   */
  create: (dto: CreationDto) => Partial<User>;

  /**
   * Updates entity from DTO.
   */
  update: (dto: UpdateDto) => Partial<User>;

  /**
   * Deletes entity by id.
   */
  deleteById: (id: User['id']) => void;
}
