import { PartialType } from '@nestjs/mapped-types';
import {CreateLigneDto} from "./create-ligne.dto";
export class UpdateLigneDto extends PartialType(CreateLigneDto) {}
