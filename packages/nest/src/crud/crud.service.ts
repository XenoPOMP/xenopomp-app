export interface CrudServiceEntityContract {
  id: string;
}

export interface CrudService<
  Entity extends CrudServiceEntityContract,
  CreationDto,
  UpdateDto,
> {
  /**
   * Returns entity with certain id if exists.
   */
  getById: (id: Entity['id']) => Promise<Partial<Entity> | null>;

  /**
   * Returns all entities based on some query conditions.
   */
  getMany: () => Promise<Partial<Entity>[]>;

  /**
   * Creates entity from DTO.
   */
  create: (dto: CreationDto) => Promise<Partial<Entity>>;

  /**
   * Updates entity from DTO.
   */
  updateById: (id: Entity['id'], dto: UpdateDto) => Promise<Partial<Entity>>;

  /**
   * Deletes entity by id.
   */
  deleteById: (id: Entity['id']) => Promise<void>;
}
