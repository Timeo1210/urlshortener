import express from "express";

import { getLinkByHashRequestDTO } from "@/interface-adapters/dtos/getLinkByHash/getLinkByHash.request.dto";
import { getLinkByHashResponseDTO } from "@/interface-adapters/dtos/getLinkByHash/getLinkByHash.response.dto";

import { getLinkByHashService } from "@/core/services/getLinkbyHash.service";

const router = express.Router();

router.get("/:id", async (req, res) => {
  const requestDTO = new getLinkByHashRequestDTO(req.params.id);
  if (!requestDTO.validate()) {
    res.sendStatus(400);
    return;
  }
  const responseService = await getLinkByHashService.getLinkbyHash(requestDTO);
  const responseDTO = new getLinkByHashResponseDTO(responseService.link);

  res.json(responseDTO);
});

export const getLinkByHashRoute = router;
