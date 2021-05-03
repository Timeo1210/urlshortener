import express from "express";

import { postLinkRequestDTO } from "@/interface-adapters/dtos/postLink/postLink.request.dto";
import { postLinkResponseDTO } from "@/interface-adapters/dtos/postLink/postLink.response.dto";

import { postLinkService } from "@/core/services/postLink.service";

const router = express.Router();

router.post("/generate", async (req, res) => {
  const requestDTO = new postLinkRequestDTO(req.body.link);
  if (!requestDTO.validate()) {
    res.sendStatus(400);
    return;
  }
  const responseService = await postLinkService.postLink(requestDTO);
  const responseDTO = new postLinkResponseDTO(responseService.redirect);

  res.json(responseDTO);
});

export const postLinkRoute = router;
