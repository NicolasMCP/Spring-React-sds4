package infodata.io.github.nicolasmcp.vendasweb.services;

import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import infodata.io.github.nicolasmcp.vendasweb.dto.SellerDTO;
import infodata.io.github.nicolasmcp.vendasweb.entities.Seller;
import infodata.io.github.nicolasmcp.vendasweb.repositories.SellerRepository;

@Service
public class SellerService {

	@Autowired
	private SellerRepository repository;
	
	public List<SellerDTO> findAll(){
		List<Seller> result = repository.findAll();
		return result.stream().map(x -> new SellerDTO(x)).collect(Collectors.toList());	
	}
}
